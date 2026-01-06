from django.shortcuts import render
from .models import blogPost


# Create your views here.


def home(request):
    return render(request, "base/home.html")


def add(request):
    if request.method == "POST":
        name = request.POST.get("title")
        des = request.POST.get("des")
        like = request.POST.get("like")

        blogPost.objects.create(
            title=name,
            desc=des,
            likes=like
        )

    context = {}
    return render(request, "base/addpost.html", context)


def index(request):
    posts = blogPost.objects.all()
    context = {
        'posts': posts
    }

    return render(request, "base/index.html", context)
