from django.db import models

class BasicData(models.Model):
    identity = models.CharField(max_length=15)
    name = models.CharField(max_length=11)
    address = models.CharField(max_length=50)
    person_phone = models.CharField(max_length=15,default='0000000000')
    person_house_phone = models.CharField(max_length=15,default='0000000000')
    company = models.CharField(max_length=50)
    company_phone = models.CharField(max_length=15)
    job_title = models.CharField(max_length=30)
    career = models.IntegerField()
    birthday = models.CharField(max_length=10,default='00000')
    company_address = models.CharField(max_length=50,default = '')
    description = models.TextField(max_length=500,default='')
    

    

# Create your models here.
