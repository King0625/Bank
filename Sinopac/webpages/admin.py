from django.contrib import admin
from .models import BasicData, BankDepositData,UnionCreditCheckSystemInfo, CreditCardInformation

admin.site.register(BasicData)
admin.site.register(BankDepositData)
admin.site.register(UnionCreditCheckSystemInfo)
admin.site.register(CreditCardInformation)


# Register your models here.
