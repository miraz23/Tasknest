from rest_framework import generics, viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from .models import Task
from .serializers import TaskSerializer, UserRegisterSerializer
from .permissions import IsOwner

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwner]
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['status']
    search_fields = ['title', 'description']
    ordering_fields = ['order', 'due_date']

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        from django.utils import timezone
        queryset = self.get_queryset().filter(due_date__gte=timezone.now().date())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def reorder(self, request):
        """
        Accepts a list of task IDs in the new order.
        """
        order = request.data.get('order', [])
        for idx, task_id in enumerate(order):
            try:
                task = Task.objects.get(id=task_id, user=request.user)
                task.order = idx
                task.save()
            except Task.DoesNotExist:
                continue
        return Response({'status': 'order updated'})