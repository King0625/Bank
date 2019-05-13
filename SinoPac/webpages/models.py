from django.db import models

# it is necessary to set the identity to be the link of each table

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
    
class BankDepositData(models.Model):
    name = models.CharField(max_length=15)
    identity = models.CharField(max_length=15)
    account = models.CharField(max_length=20)
    performance = models.IntegerField()
    opnning_data = models.DateTimeField()
    a_year_average_balance = models.IntegerField()
    six_month_average_balance = models.IntegerField()
    refund_record = models.IntegerField()
    seizure_deposit = models.IntegerField()
    suspicious_account = models.BooleanField()
    
    


    

# Create your models here.
