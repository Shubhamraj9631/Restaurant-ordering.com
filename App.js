import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import OrderList from './OrderList';
import AddOrderForm from './AddOrderForm';

const App = () => {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const handleToggleComplete = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, completed: !order.completed } : order
      )
    );
  };

  const handleDelete = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <OrderList
          orders={orders}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
      </ScrollView>
      <AddOrderForm onSubmit={handleAddOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    paddingVertical: 16,
  },
});

export default App;
