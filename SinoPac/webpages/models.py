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
    
    
class FDDData(models.Model):
    name = models.CharField(max_length=15)
    identity = models.CharField(max_length=15)
    new_batch_processing_day = models.DateTimeField()

    VERY_LOW = 'VL'
    LOW = 'L',
    MIDDLE = 'M'
    HIGH = 'H'
    VERY_HIGH = 'VH'

    LAUNDERING_RISK_GRADDING = (
        ('VL', '非常高風險'),
        ('L','低風險'),
        ('M','中風險'),
        ('H','高風險'),
        ('VH','非常高風險'),
    )
    money_laundering_risk_degree = models.CharField(
        max_length=5,
        choices=LAUNDERING_RISK_GRADDING,
        default = 'VL'
    )
    priority_low = models.CharField(max_length=10)
    background = models.CharField(max_length=50)
    geographical_factor = models.CharField(max_length=50)
    relation_behavior = models.CharField(max_length=50)
    production = models.CharField(max_length=20)
    money_laundering_risk_gradding = models.IntegerField()
    FDD_information = models.BooleanField()
    

class Contribution(models.Model):
    name = models.CharField(max_length=15)
    date_of_information = models.DateField()
    three_months_assets = models.IntegerField()
    AP = models.IntegerField()
    not_ap = models.IntegerField()
    last_ap = models.IntegerField()
    last_not_ap =  models.IntegerField()

class UnionSearchData(models.Model):
    name = models.CharField(max_length=15)
    identity = models.CharField(max_length=15)
    EN_name = models.CharField(max_length=15)
    address = models.CharField(max_length=50)
    birthday = models.DateField()

# Create your models here.
