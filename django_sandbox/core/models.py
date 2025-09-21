from django.db import models
from model_utils.models import TimeStampedModel
from simple_history.models import HistoricalRecords


class SoftDeleteAuditableMixin(TimeStampedModel):
    is_active = models.BooleanField(default=False)
    history = HistoricalRecords()

    class Meta:
        abstract = True
