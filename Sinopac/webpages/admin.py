from django.contrib import admin
from .models import BasicData, BankDepositData,UnionCreditCheckSystemInfo, CreditCardInformation,Case

admin.site.register(BasicData)
admin.site.register(BankDepositData)
admin.site.register(UnionCreditCheckSystemInfo)
admin.site.register(CreditCardInformation)
admin.site.register(Case)


# Register your models here.
