from .models import photo
from rest_framework import viewsets, permissions
from .serializers import photoSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseRedirect

class photoViewSet(viewsets.ModelViewSet):
    queryset = photo.objects.all().order_by("-created_at")
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = photoSerializer

    # Overriding the create method to redirect to the page that make the request
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    
    def perform_create(self, serializer):
        serializer.save()

    
    



