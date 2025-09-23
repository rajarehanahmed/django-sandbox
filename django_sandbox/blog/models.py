from django.contrib.auth import get_user_model
from django.db.models import PROTECT
from django.db.models import CharField
from django.db.models import ForeignKey
from django.db.models import TextField
from simple_history.models import HistoricalRecords

from django_sandbox.core.models import SoftDeleteAuditableMixin

User = get_user_model()


class Post(SoftDeleteAuditableMixin):
    title = CharField(max_length=200)
    body = TextField()
    author = ForeignKey(User, on_delete=PROTECT)
    history = HistoricalRecords()

    def __str__(self):
        return self.title
