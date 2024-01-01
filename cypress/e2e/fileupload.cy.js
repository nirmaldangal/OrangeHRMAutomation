import 'cypress-file-upload';

describe('file upload',(()=>{
    it('Single file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
       // upload garnu parne file lai fixture ma halne
        cy.get('#file-upload').attachFile('test1.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example']h3").should('have.text','File Uplopaded!');




    })

    it('File upload - Rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
       // upload garnu parne file lai fixture ma halne
        cy.get('#file-upload').attachFile({filepath:'test1.pdf',fileName:'myfile.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example']h3").should('have.text','File Uplopaded!');




    })
    it('File Upload- Drag and Drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
       // upload garnu parne file lai fixture ma halne
        cy.get('#drag-drop-upload').attachFile('test1.pdf',{subjectType:'dra-n-drop'});
        

        cy.wait(5000);
        cy.get("#drag-drop-upload> .dz-preview> .dz-details>.dz-filename>span")
        .contains("test1.pdf");




    })
    it('Multiple file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
       // upload garnu parne file lai fixture ma halne
        cy.get('#drag-drop-upload').attachFile(['test1.pdf','test2.pdf']);
        cy.wait(2000);
        cy.get('cy.get(').should('contain.text','Files You Selected')





    })





}))