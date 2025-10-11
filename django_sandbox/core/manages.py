from django.db.models import Manager


class ActiveManager(Manager):
    """
    Custom Model Manager that filters that gives the active objects(is_active=True) with .active()
    """

    def active(self):
        return self.filter(is_active=True)
