from django.contrib import admin
from .models import blogPost,comments


# Register your models here.

@admin.register(blogPost)
class blogPostAdmin(admin.ModelAdmin):
    pass


@admin.register(comments)
class blogPostAdmin(admin.ModelAdmin):
    pass
