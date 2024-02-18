from typing import Optional

from pydantic import BaseModel

class Person(BaseModel):
    name: str
    username: str
    email: str
    password: str
    onRide: Optional[bool] = False

    def start_ride(self):
        self.onRide = True

    def end_ride(self):
        self.onRide = False