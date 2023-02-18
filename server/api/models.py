from django.db import models

# Create your models here.

class photo(models.Model):
    description=models.TextField(max_length=101)
    image_url=models.URLField(max_length=500)
    created_at=models.DateTimeField(auto_now_add=True)