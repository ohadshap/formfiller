import React, { useState, useEffect } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View,
} from "@aws-amplify/ui-react";
import { fetchDocsAndTemps } from "../utils/api/fetchers"
// TODO - remove all imports and import only queries
// approach it as queries.listDocuments
// DO THE SAME FOR MUTATIONS
// import { 
//     getDocument,
//     listDocuments,
//     getAnnotation,
//     listAnnotations,
//     annotationsByDocId,
// } from "../graphql/queries"

// import { listDocsAndAnnotations } from '../utils/graphql-custom/queries'
import {
    createDocument as createDocumentMutation,
    updateDocument as updateDocumentMutation,
    deleteDocument as deleteDocumentMutation,
    createAnnotation as createAnnotationMutation,
    updateAnnotation as updateAnnotationMutation,
    deleteAnnotation as deleteAnnotationMutation,
} from "../graphql/mutations";

const MyTemplates = () => {
    const [docs, setDocs] = useState([]);
    const [inputs, setInputs] = useState([
      { xCoord: null, yCoord: null, page: null }
    ]);
  
    useEffect(() => {
      getTemplates();
    }, []);
  
    const getTemplates = async () => {
        const docsFromAPI = await fetchDocsAndTemps();
        // console.log('FETCH DOCS', docsFromAPI.length);
        console.log('FETCH DOCS', docsFromAPI);
        setDocs(docsFromAPI);
    }
  
    const createDoc = async (event) => {
      event.preventDefault();
      const form = new FormData(event.target);
      const image = form.get("image");
      
      const data = {
        name: form.get("name"),
        description: form.get("description"),
        image: image.name,
        annotations: inputs,
      };
      console.log('createDoc', data)
      // if (!!data.image) await Storage.put(data.name, image);
      // await API.graphql({
      //   query: createDocumentMutation,
      //   variables: { input: data },
      // });
      // getTemplates();
      // event.target.reset();
    }
  
    const deleteDoc = async ({ id, name }) => {
      console.log('deleteDoc - doc to delete', {id, name});
      const newDocs = docs.filter((doc) => doc.id !== id);
      console.log('deleteDoc - new docs', newDocs);
      setDocs(newDocs);
      await Storage.remove(name);
      await API.graphql({
        query: deleteDocumentMutation,
        variables: { input: { id } },
      });
    }
  
    const addInput = () => {
      console.log('ADDED INPUT');
      setInputs([...inputs,{ xCoord: null, yCoord: null, page: null }]);
    };
  
    const handleInputChange = (e, index) => {
      const newInputs = [...inputs];
      newInputs[index][e.target.name] = e.target.value;
      console.log('INPUT change', `index: ${index}, name: ${e.target.name}, value: ${e.target.value}`);
      setInputs(newInputs);
    };
  
    return (
      <View className="App">
        <Heading level={6}>My Templates</Heading>
        <View as="form" margin="3rem 0" onSubmit={createDoc}>
          <Flex direction="row" justifyContent="center">
            <TextField
              name="name"
              placeholder="Document Name"
              label="Document Name"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="description"
              placeholder="Document Description"
              label="Document Description"
              labelHidden
              variation="quiet"
              required
            />
            <View
              name="image"
              as="input"
              type="file"
              style={{ alignSelf: "end" }}
            />
            {inputs.map((inp, i) => (
              <Flex
              key={i}
              justifyContent="center"
              alignItems="center"
              >
                <TextField
                  name="page"
                  placeholder="Page"
                  label="Page"
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
              </Flex>
            ))
            }
            <Button size='small' onClick={() => addInput()}>
              Add Annotation
            </Button>
            <Button type="submit" variation="primary">
              Create Document
            </Button>
          </Flex>
        </View>
        <Heading level={3}>Current Templates</Heading>
        <View margin="3rem 0">
          {docs.map((doc) => (
            <Flex
              key={doc.id || doc.name}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
                {doc.name}
              </Text>
              <Text as="span">{doc.description}</Text>
              {doc.image && (
                <Image
                  src={doc.image}
                  alt={`visual aid for ${docs.name}`}
                  style={{ width: 400 }}
                />
              )}
              <Button variation="link" onClick={() => deleteDoc(doc)}>
                Delete Document
              </Button>
            </Flex>
          ))}
        </View>
        {/* <Button onClick={signOut}>Sign Out</Button> */}
      </View>
    );
};

export default MyTemplates;