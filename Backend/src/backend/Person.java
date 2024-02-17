package backend;

import java.util.Objects;

public class Person {

  private String name;
  private String username;
  private String email;
  private String password;
  private boolean onRide;
  //private RideHistory[] history;

  public Person(String name, String username, String email, String password) {
    this.name = name;
    this.username = name;
    this.email = email;
    this.password = password;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public boolean isOnRide() {
    return onRide;
  }

  public void onRide() {
    this.onRide = true;
  }

  public void offRide() {
    this.onRide = false;
  }

  @Override
  public boolean equals(Object object) {
    if (this == object) return true;
    if (object == null || getClass() != object.getClass()) return false;
    Person person = (Person) object;
    return Objects.equals(name, person.name) &&
            (Objects.equals(username, person.username) || Objects.equals(email, person.email));
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, username, email);
  }

  @Override
  public String toString() {
    return "User " + username;
  }
}
