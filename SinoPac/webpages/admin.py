from django.contrib import admin
from .models import BasicData, BankDepositData, Contribution, FDDData, UnionSearchData, CreditCardBasicData

admin.site.register(BasicData)
admin.site.register(BankDepositData)
admin.site.register(Contribution)
admin.site.register(FDDData)
admin.site.register(UnionSearchData)
admin.site.register(CreditCardBasicData)


# Register your models here.
