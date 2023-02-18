from rest_framework import serializers
from .models import photo

class photoSerializer(serializers.ModelSerializer):
    class Meta:
        model = photo
        fields = ('id','description','image_url')
        read_only_fields = ('id','created_at')