const KNOWLEDGE_BASE = [
    {
        keywords: ["what is", "dhamma village", "about", "project"],
        response: "Dhamma Village is a non-profit rural community development project designed for disciplined living, preventive mental well-being, and self-reliance through structured daily routines and shared responsibility."
    },
    {
        keywords: ["religious", "religion", "buddhist", "meditation", "ashram"],
        response: "Dhamma Village is not a religious project. It is a secular community development model. While it draws on principles of discipline and mindfulness, it is not affiliated with any religious organization or meditation retreat centre."
    },
    {
        keywords: ["buddha", "principles", "dhamma", "teaching"],
        response: "The project integrates core principles often associated with Buddha's teachings in a secular context: Sila (ethical conduct/discipline), Samadhi (concentration/structured routine), and Panna (wisdom/self-reliance). These are used as practical tools for community stability and mental well-being."
    },
    {
        keywords: ["community living", "live there", "shared", "village works"],
        response: "Residents live in housing clusters and share daily responsibilities like farming, kitchen duties, and maintenance. Life follows a fixed schedule to build cooperation and stability."
    },
    {
        keywords: ["self-reliance", "sustainability", "optimized", "cost"],
        response: "The village is highly optimized for low-cost living through water harvesting, biomass energy, and internal food production. This reduces dependency on external aid."
    },
    {
        keywords: ["who can live", "eligibility", "join"],
        response: "Participation is inclusive and non-discriminatory, primarily serving underprivileged rural families, youth requiring discipline, and individuals seeking stable living environments."
    },
    {
        keywords: ["funding", "money", "donate", "csr"],
        response: "The project is funded through public charitable trust donations, CSR contributions, and philanthropic partnerships. All funds are auditable and used strictly for project infrastructure."
    },
    {
        keywords: ["school", "children", "education"],
        response: "The village features a non-formal community learning centre for children that focuses on life skills and supervised developmental support, though it doesn't replace formal schooling."
    }
];

const SYSTEM_PROMPT = `You are the Dhamma Village Assistant. Your goal is to answer questions about Dhamma Village, community living, and the secular application of Buddha's principles (discipline, mindfulness, ethics). 
Key Facts:
- Dhamma Village is a non-profit project for rural development and community well-being.
- It is NOT religious, NOT an ashram, and NOT affiliated with dhamma.org.
- It focuses on "Simple Living, Highly Optimized, Lowest Cost".
- It follows principles like Sila (discipline), Samadhi (routine), and Panna (self-reliance).
Tone: Institutional, professional, helpful, and secular.
If asked about topics outside this scope, politely redirect to the village's goals.`;

const OLLAMA_URL = 'http://localhost:11434/api/generate';
const OLLAMA_MODEL = 'llama3'; // Default model, can be changed by user

async function fetchOllamaResponse(input) {
    try {
        const response = await fetch(OLLAMA_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: OLLAMA_MODEL,
                prompt: input,
                system: SYSTEM_PROMPT,
                stream: false
            })
        });
        
        if (!response.ok) throw new Error('Ollama connection failed');
        
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.warn("Ollama unavailable, falling back to Knowledge Base:", error);
        return getKnowledgeBaseResponse(input);
    }
}

function getKnowledgeBaseResponse(input) {
    const lowerInput = input.toLowerCase();
    for (const item of KNOWLEDGE_BASE) {
        if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
            return item.response;
        }
    }
    return "I'm the Village Assistant. I can help you with questions about Dhamma Village's structure, self-sufficiency systems, community living, and the secular principles of discipline we follow. (Note: Ollama connection could not be established; using knowledge base).";
}

// UI Handling
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('chatbot-trigger');
    const window = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chatbot-close');
    const input = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const messagesContainer = document.getElementById('chatbot-messages');

    trigger.addEventListener('click', () => {
        window.style.display = window.style.display === 'flex' ? 'none' : 'flex';
        if (messagesContainer.children.length === 0) {
            addMessage("Hello! I am the Dhamma Village Assistant. How can I help you today?", 'bot');
        }
    });

    closeBtn.addEventListener('click', () => {
        window.style.display = 'none';
    });

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message message-${sender}`;
        msgDiv.textContent = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async function handleSend() {
        const text = input.value.trim();
        if (text) {
            addMessage(text, 'user');
            input.value = '';
            
            // Show typing indicator or just wait
            const response = await fetchOllamaResponse(text);
            addMessage(response, 'bot');
        }
    }

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
});
