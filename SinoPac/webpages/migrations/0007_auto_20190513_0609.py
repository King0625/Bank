# Generated by Django 2.2.1 on 2019-05-13 06:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpages', '0006_auto_20190512_0459'),
    ]

    operations = [
        migrations.AlterField(
            model_name='basicdata',
            name='description',
            field=models.TextField(default='', max_length=500),
        ),
    ]
