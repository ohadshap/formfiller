import { API, Storage } from "aws-amplify";
import { listDocsAndAnnotations } from "../graphql-custom/queries"
import { getDocument } from '../../graphql/queries'

export const fetchDocs = async () => {
    try {
        const apiData = await API.graphql({ query: listDocsAndAnnotations });
        // console.log("fetch test", apiData.data.listDocuments.items);
        return apiData.data.listDocuments.items;
    } catch (error) {
        console.log('ERROR - fetchDocs', error);
        return null
    }
};

export const fetchDocsAndTemps = async () => {
    try {
        const docs = await fetchDocs();
        console.log("fetch test", docs);
        (docs && docs.length) && await Promise.all(
            docs.map(async (doc) => {
                if(!!doc.image) {
                    const url = await Storage.get(doc.name, { level: 'public' });
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

export const getDoc = async (id) => {
    try {
        if (!id) {
            throw new Error('no id was supplied')
        }
        const apiData = await API.graphql({
            query: getDocument,
            variables: { id },
        });
        return apiData.data.getDocument;
    } catch (error) {
        console.log('ERROR - fetchDocs', error);
        return null
    }
};
// b0dbd57b-dab3-4593-910e-a3ed2afcd910
