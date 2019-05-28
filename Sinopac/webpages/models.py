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

    def __str__(self):
        return "Basic Data"
    
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

    def __str__(self):
        return "BankDepositData"
    
    
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

    def __str__(self):
        return "FDD Data"
    

class Contribution(models.Model):
    name = models.CharField(max_length=15)
    identity = models.CharField(max_length=15,default='')
    date_of_information = models.DateField()
    three_months_assets = models.IntegerField()
    AP = models.IntegerField()
    not_ap = models.IntegerField()
    last_ap = models.IntegerField()
    last_not_ap =  models.IntegerField()
    
    def __str__(self):
        return "Contribution Data"

class UnionSearchData(models.Model):
    name = models.CharField(max_length=15)
    identity = models.CharField(max_length=15)
    EN_name = models.CharField(max_length=15)
    address = models.CharField(max_length=50)
    birthday = models.DateField()

    def __str__(self):
        return "Union Search Data"

class CreditCardBasicData(models.Model):
    change_date = models.DateField()
    identity = models.CharField(max_length=15,default='')
    institute = models.CharField(max_length=15)
    name = models.CharField(max_length = 15)
    birthday = models.DateField()
    census = models.CharField(max_length=30)
    address = models.CharField(max_length=30)
    person_phone = models.CharField(max_length=15)
    person_house_phone = models.CharField(max_length=15)
    company = models.CharField(max_length = 20)
    job_title = models.CharField(max_length = 50)
    year_salary = models.IntegerField()
    career = models.IntegerField()
    EDU_DEGREE = (
        ('elementary', '小學'),
        ('junior' , '國中'),
        ('senior' , '高中'),
        ('undergraduated' , '大學'),
        ('master' , '碩士'),
        ('phd' , '博士'),
    )
    edu_degree = models.CharField(max_length=20,choices=EDU_DEGREE,default='undergraduated')

# Create your models here.
