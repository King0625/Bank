# Generated by Django 2.2.1 on 2019-05-13 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpages', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contribution',
            name='identity',
            field=models.CharField(default='', max_length=15),
        ),
    ]
