import { API, Storage } from "aws-amplify";
import { listDocsAndAnnotations } from "../graphql-custom/queries"

export const fetchDocs = async () => {
    try {
        const apiData = await API.graphql({ query: listDocsAndAnnotations });
        return apiData.data.listDocuments.items;
    } catch (error) {
        console.log('ERROR - fetchDocs', error);
        return null
    }
};

export const fetchDocsAndTemps = async () => {
    try {
        const docs = await fetchDocs();
        (docs && docs.length) && await Promise.all(
            docs.map(async (doc) => {
                if(doc.image) {
                    const url = await Storage.length(doc.name);
                    doc.image = url;
                }
                return doc;
            })
        );
        return docs;
    } catch (error) {
        console.log('ERROR - fetchDocsAndTemps', error);
        return null
    }
};
