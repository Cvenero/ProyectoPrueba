from django.apps import AppConfig


class MyfirstapplicationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'MyFirstApplication'

from django.apps import AppConfig

class Aplicacion1Config(AppConfig):
    default_auto_field = ’django.db.models.BigAutoField’
    name = ’MyWebApps.MyFirstApplication’