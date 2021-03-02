import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
function getDisplayName(Component) {
  return (
      Component.displayName ||
      Component.name ||
      (typeof Component === 'string' && Component.length > 0
          ? Component
          : 'Unknown')
  );
}
function App() {
  console.log(getDisplayName(Input))

  return (
      <Form>
        <FormItem>
          <Input/>
        </FormItem>
      </Form>
  )
}
export default App;
