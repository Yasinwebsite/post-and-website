from django.db import models


# Create your models here.

class blogPost(models.Model):
    
    title = models.CharField(max_length=100)
    desc = models.TextField()
    likes = models.IntegerField(max_length=2)
    Publish = models.DateTimeField(auto_now_add=True)
    Update = models.DateTimeField(auto_now=True)
