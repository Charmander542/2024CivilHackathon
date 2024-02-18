from typing import List

from pydantic import BaseModel

from fastAPI import Person


class Location(BaseModel):
    longitude: float
    latitude: float

class Ride(BaseModel):
    price: float
    maxSeats: int
    riderName: str
    car: str
    plate: str
    destination: Location
    pickUp: Location
    riders: List[Person] = []

    def get_num_riders(self):
        return len(self.riders)

    def add_rider(self, person: Person):
        if self.get_num_riders() < self.maxSeats:
            self.riders.append(person)
            return True
        return False

    def is_full(self):
        return self.get_num_riders() == self.maxSeats

    def get_dest_longitude(self):
        return self.destination.longitude

    def get_pick_up_latitude(self):
        return self.pickUp.latitude
