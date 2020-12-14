from django.db import models
import datetime
# Create your models here.
class Users(models.Model):
    username = models.CharField(max_length=50, default='')
    pwd = models.CharField(max_length=50, default='')
    email = models.EmailField(default='null@email.com')
    lastLoggedIn = models.DateField(default=datetime.date.today())
    phoneNum = models.CharField(max_length=20, default='000-000-0000')

class Contact(models.Model):
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()

    def __str__(self):
        return self.email