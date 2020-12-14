from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from .models import Contact

def index(request, *args, **kwargs):
    return render(request, 'mysite/index.html')

def contact(request):
    if request and request.method == 'POST':
        email_r = request.POST.get('email')
        subject_r = request.POST.get('subject')
        message_r = request.POST.get('message')
        c = Contact(email=email_r, subject=subject_r, message=message_r)
        c.save()
        return render(request, 'mysite/contact.html')
    else:
        return render(request, 'mysite/contact.html')

def projects(request):
    return render(request, 'mysite/projects.html')