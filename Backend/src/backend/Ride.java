package backend;

import java.util.ArrayList;
import java.util.List;

public class Ride {
  private double price;
  private int maxSeats;
  private String riderName;
  private String car;
  private String plate;
  private String destination;
  private List<Person> riders = new ArrayList<Person>();

  public Ride(double price, String riderName, String car, String plate, int maxSeats, String destination) {
    this.price = price;
    this.riderName = riderName;
    this.car = car;
    this.plate = plate;
    this.maxSeats = maxSeats;
  }
  public int getNumRiders() {
    return riders.size();
  }
  public boolean addRider(Person person) {
    if (getNumRiders() < maxSeats) {
      riders.add(person);
      return true;
    }
    return false;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public boolean isFull() {
    return riders.size() == maxSeats;
  }

  public String getRiderName() {
    return riderName;
  }

  public String getCar() {
    return car;
  }

  public String getPlate() {
    return plate;
  }

  public String getDestination() {
    return destination;
  }

}
