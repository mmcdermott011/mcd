from django.urls import path
from . import views
# ignore this comment
urlpatterns = [
    path('hello/', views.index),
    path('', views.index, name='home'),
    path('contact', views.contact, name='contact'),
    path('projects', views.projects, name='projects'),

]