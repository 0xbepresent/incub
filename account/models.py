from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Account(models.Model):
    name = models.CharField(max_length=15,verbose_name = 'name')
    description = models.TextField(help_text = 'Description')
    user_account = models.CharField(max_length=50,verbose_name = 'user account')
    pass_account = models.CharField(max_length=50,verbose_name = 'pass_account')
    user = models.ForeignKey(User)
    
    def __unicode__(self):
        return self.name