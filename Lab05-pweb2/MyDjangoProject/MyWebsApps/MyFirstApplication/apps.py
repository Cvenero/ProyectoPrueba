from django.apps import AppConfig


class MyfirstapplicationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'MyFirstApplication'


class Aplicacion1Config(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'MyWebsApps.MyFirstApplication'