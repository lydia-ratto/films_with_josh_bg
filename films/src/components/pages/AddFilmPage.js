import React from "react";
import { Checkbox, Input, Text } from "@chakra-ui/react";

function AddFilmPage() {
  return (
    <div>
      <h1>Add review</h1>
      <form>
        <Text>Set the scene for us</Text>
        <Input placeholder='When was it?' />
        <Input placeholder='Where were you?' />
        <Checkbox />
        <Text>Final verdict</Text>
        <Input placeholder="Extra notes"/>

      </form>
    </div>
  )
}

export default AddFilmPage;
