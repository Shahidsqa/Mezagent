
const imaps = require('imap-simple');
const { simpleParser } = require('mailparser');

module.exports = (on, config) => {
  on('task', {
    async getOtpFromGmail() {
      const connectionConfig = {
        imap: {
          user: 'shahidali20145722@gmail.com',
          password: 'tqvh ubxk oloh jdsj',
          host: 'imap.gmail.com',
          port: 993,
          tls: true,
          tlsOptions: { rejectUnauthorized: false },
          authTimeout: 7000
        }
      };

      try {
        console.log('🔌 Connecting to Gmail...');
        const connection = await imaps.connect(connectionConfig);

        console.log('📂 Opening INBOX...');
        await connection.openBox('INBOX');

        const delay = 1 * 3600 * 1000; // 1 hour
        const since = new Date(Date.now() - delay).toISOString(); // .toISOString() formats it in a format suitable for the IMAP
// Only fetch Unread emails, only fetch emails since the calculated time(1hr), only fetch emails from info@mezagent.com
        const searchCriteria = ['UNSEEN', ['SINCE', since],  
        ['HEADER', 'FROM', 'info@mezagent.com']]; 
        const fetchOptions = {
            bodies: [''], // this means fetch the *entire* message (BODY[])
            struct: true, // When true, fetches the message structure, which helps in parsing attachments, multipart messages, etc.
            markSeen: true //Automatically marks the fetched messages as read on the server.
        };

        console.log(`🔍 Searching emails since: ${since}`);
        const messages = await connection.search(searchCriteria, fetchOptions);
        console.log(`📨 Messages found: ${messages.length}`);

        let otp = null;
// Starts a for...of loop to iterate through each email (msg) in the messages array.
        for (const msg of messages) {
            // Each msg can have multiple parts (like plain text, HTML, attachments, etc.).
            // This line tries to find the part that contains the entire raw body of the email.
            // It looks for a part where which === '', which means "BODY[]" in IMAP (i.e., the whole message body).
            const fullBodyPart = msg.parts.find(part => part.which === '');
          
            if (!fullBodyPart || !fullBodyPart.body) {
              console.log('⚠️ No full raw BODY found.');
              continue;
            }
          //Ensures the raw email content is in string format:
            const rawEmail = typeof fullBodyPart.body === 'string'
            //If already a string, use it.
              ? fullBodyPart.body
              //If it's an object (e.g., binary chunks), convert it to a string using Buffer and UTF-8 encoding.
              : Buffer.from(Object.values(fullBodyPart.body).join('')).toString('utf-8');

          //Uses simpleParser (from mailparser library) to parse the raw email into a structured object.
            const parsed = await simpleParser(rawEmail);
          
            console.log('📄 Email text content (parsed.text):', parsed.text);
           // console.log('📄 Email HTML content (parsed.html):', parsed.html);
          
           // const content = parsed.text || parsed.html || '';
           const content = parsed.text;
            const match = content.match(/(\d{6})/);
          
            if (match) {
              otp = match[1];
              console.log('✅ OTP found:', otp);
              break;
            } else {
              console.log('⚠️ No OTP match found in this email.');
            }
          }      
          
        connection.end();
        console.log('📴 Connection closed.');
        return otp;

      }
       catch (error) {
        console.error('❌ Error reading OTP email:', error);
        return null;
      }
    }
  });
};
