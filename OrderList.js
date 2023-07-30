import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import OrderItem from './OrderItem';

const OrderList = ({ orders, onToggleComplete, onDelete }) => {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => (
        <OrderItem order={item} onToggleComplete={onToggleComplete} onDelete={onDelete} />
      )}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});

export default OrderList;
