# Generated by Django 2.2.1 on 2019-06-23 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpages', '0009_auto_20190623_0335'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bankdepositdata',
            name='a_year_average_balance',
            field=models.IntegerField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='bankdepositdata',
            name='performance',
            field=models.IntegerField(default=0, null=True),
        ),
    ]