package com.gminne;

import java.util.ArrayList;
import java.util.List;

public class Room {
	
	private String host;
	private String roomName;
	private List<String> usersInRoom = new ArrayList<String>();	// list with all users in room
	
	public Room(String host, String roomName) {
		this.host = host;
		this.roomName = roomName;
		usersInRoom.add(host);
	}
	
	public String getRoomHost() {
		return host;
	}
	
	public String getRoomName() {
		return roomName;
	}
	
}
