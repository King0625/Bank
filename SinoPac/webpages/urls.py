from django.urls import path

from . import views

urlpatterns = [
		path('',views.index, name='index'),
		path('test/',views.test,name='test'),
		path('basicData/',views.basicDataQuery,name='basicDataQuery'),
		path('bankDepositData/',views.bankDepositData,name="bankDepositData")
		]
