import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderItem = ({ order, onToggleComplete, onDelete }) => {
  return (
    <View style={styles.orderItem}>
      <Text>{order.customerName}</Text>
      <Text>Table ID: {order.tableId}</Text>
      <TouchableOpacity onPress={() => onToggleComplete(order.id)}>
        <Text style={order.completed ? styles.completedText : styles.activeText}>
          {order.completed ? 'Completed' : 'Active'}
        </Text>
      </TouchableOpacity>
      {order.completed ? null : (
        <TouchableOpacity onPress={() => onDelete(order.id)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  completedText: {
    color: 'green',
    fontWeight: 'bold',
  },
  activeText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    marginTop: 8,
    padding: 8,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderItem;
