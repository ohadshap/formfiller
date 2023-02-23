import React, { useState } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { FaRegTrashAlt } from 'react-icons/fa'
import {
    Button,
    Flex,
    Heading,
    Image,
    TextField,
    View,
} from "@aws-amplify/ui-react";

const AnnotationCard = () => {
    const [inputs, setInputs] = useState([
        {
            xCoord: null,
            yCoord: null,
            field: "temp",
            fieldText: null,
        }
      ]);
    
    const addInput = () => {
        console.log('ADDED INPUT');
        setInputs([...inputs,{
            xCoord: null,
            yCoord: null,
            field: "temp",
            fieldText: null,
        }]);
    };
    
    const handleInputChange = (e, index) => {
        const newInputs = [...inputs];
        newInputs[index][e.target.name] = e.target.value;
        console.log('INPUT change', `index: ${index}, name: ${e.target.name}, value: ${e.target.value}`);
        setInputs(newInputs);
    };

    const deleteAnnotation = (index) => {
        console.log("delete annotation", index);
    }

    return (
        <Flex direction="column">
            <Heading level={3}>Annotations</Heading>
            {inputs.map((inp, i) => (
                <Flex
                key={i}
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
                direction="column"
                border="1px solid grey"
                boxShadow="1px 3px 4px grey"
                borderRadius="10px"
                padding="5px"
                >
                    <TextField
                    name="field"
                    placeholder="Field"
                    label="Field"
                    labelHidden
                    variation="quiet"
                    required
                    onChange={(e) => handleInputChange(e, i)}
                    />
                    <TextField
                    name="fieldText"
                    placeholder="FieldText"
                    label="FieldText"
                    labelHidden
                    variation="quiet"
                    required
                    onChange={(e) => handleInputChange(e, i)}
                    />
                    <TextField
                    name="xCoord"
                    placeholder="X Coordinate"
                    label="X Coordinate"
                    labelHidden
                    variation="quiet"
                    required
                    onChange={(e) => handleInputChange(e, i)}
                    />
                    <TextField
                    name="yCoord"
                    placeholder="Y Coordinate"
                    label="Y Coordinate"
                    labelHidden
                    variation="quiet"
                    required
                    onChange={(e) => handleInputChange(e, i)}
                    />
                    <FaRegTrashAlt onClick={() => deleteAnnotation(i)}/>
                </Flex>
            ))}
            <Button size='small' onClick={() => addInput()}>
            Add Annotation
            </Button>
        </Flex>
    );
};

export default AnnotationCard;