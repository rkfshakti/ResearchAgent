# � Deep Research Agent

An intelligent AI-powered research agent that autonomously conducts deep web research, synthesizes findings, and generates comprehensive reports. Built with LangGraph, LangChain, and the DeepAgents framework.

## 🎯 What It Does

The Deep Research Agent works like an expert researcher:

1. **📋 Planning** - Creates a detailed todo list to break down your research question into focused tasks
2. **🔍 Research** - Delegates research to specialized sub-agents that conduct web searches using Tavily API
3. **💭 Thinking** - Strategically reflects on findings and identifies knowledge gaps
4. **📊 Synthesis** - Consolidates findings from multiple sources with proper citations
5. **📝 Reporting** - Generates comprehensive, professionally formatted research reports
6. **✅ Verification** - Validates that all aspects of your research request have been addressed

Perfect for:
- Market research and competitive analysis
- Technology trend analysis
- Academic research and literature reviews
- Policy analysis and fact-checking
- Industry deep dives

## 🏗️ Architecture

**Backend**: Python-based research agent with LangGraph orchestration
- Multi-agent delegation system
- Advanced tool calling with Tavily web search
- Strategic thinking and reflection loops
- Automatic report generation

**Frontend**: Modern Next.js web interface
- Real-time chat interface for research requests
- Live agent activity tracking
- Task and file management sidebar
- Tool approval interrupts for transparency
- Sub-agent activity indicators

## 🚀 Quick Start

### Prerequisites

1. **Install uv package manager** (required):
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. **Navigate to project directory**:
```bash
cd path/to/deep_research
```

3. **Install dependencies**:
```bash
uv sync
```

### Setup API Keys

Create a `.env` file in the root directory with your API keys:

```bash
# Local LLM server URL (LM Studio default port)
LOCAL_LLM_BASE_URL=https://192.168.68.110:1234/v1
LOCAL_LLM_API_KEY=lm-studio
LOCAL_LLM_MODEL=local-model   # The model name shown in LM Studio

# Tavily API (required for web search)
# Free tier available: https://www.tavily.com/
TAVILY_API_KEY=your_tavily_api_key_here

# LangSmith API (required for LangGraph server)
# Free to sign up: https://smith.langchain.com/settings
LANGSMITH_API_KEY=your_langsmith_api_key_here

# Optional: Cloud LLM keys (only needed if switching away from local LLM)
# ANTHROPIC_API_KEY=your_anthropic_api_key_here
# GOOGLE_API_KEY=your_google_api_key_here
```

## 📚 Usage

### Option 1: Jupyter Notebook (Interactive Learning)
Perfect for exploring the agent step-by-step:

```bash
uv run jupyter notebook research_agent.ipynb
```

This allows you to:
- Step through research workflows interactively
- Modify prompts and tools on the fly
- Inspect agent reasoning in detail

### Option 2: LangGraph Server (Web Interface) ⭐ Recommended
Run the full-stack application with UI:

```bash
# Terminal 1: Start the LangGraph backend
langgraph dev

# Terminal 2: Start the Next.js frontend (from deep-agents-ui/)
cd deep-agents-ui
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

**Features**:
- Chat-based research interface
- Real-time agent activity tracking
- File and task management
- Tool approval interrupts
- Formatted report viewing

### Option 3: Python Script
For programmatic usage:

```bash
uv run python agent.py
```

## 📁 Project Structure

```
deep_research/
├── agent.py                  # Main research agent definition
├── research_agent.ipynb      # Interactive notebook example
├── pyproject.toml            # Python dependencies
├── .env                      # API keys (gitignored)
├── research_agent/
│   ├── prompts.py           # System instructions for orchestration and researchers
│   └── tools.py             # Tavily search and thinking tools
├── utils.py                  # Utility functions
└── deep-agents-ui/          # Next.js web frontend
    ├── src/
    │   ├── app/            # Pages and layout
    │   ├── components/      # React components
    │   └── lib/            # Utilities
    └── package.json        # Frontend dependencies
```

## 🛠️ Configuration

### Customizing Research Behavior

Edit [research_agent/prompts.py](research_agent/prompts.py) to customize:
- Research workflow instructions
- Sub-agent delegation strategy
- Report writing guidelines
- Researcher system prompts

### Adjusting Limits

In [agent.py](agent.py), modify:
```python
max_concurrent_research_units = 3      # Parallel sub-agents
max_researcher_iterations = 3          # Research depth
```

## 📋 Example Research Flow

**User asks**: "What are the latest trends in AI agents for 2025?"

The agent:
1. ✍️ Creates tasks: "Find recent AI agent frameworks", "Identify industry adoption", etc.
2. 🔄 Delegates to 2-3 parallel sub-agents
3. 🔍 Each sub-agent searches for specific aspects
4. 💭 Agent reflects on findings and identifies gaps
5. 📝 Synthesizes into a comprehensive report with sources
6. ✅ Verifies completeness against original request

**Output**: Professional research report saved to `/final_report.md`

## 🔐 Security & Environment Variables

⚠️ **IMPORTANT**: Never commit your `.env` file to git!

### Setup for Git Publishing

1. **Create `.env.example`** for reference:
```bash
ANTHROPIC_API_KEY=your_key_here
GOOGLE_API_KEY=your_key_here
TAVILY_API_KEY=your_key_here
LANGSMITH_API_KEY=your_key_here
```

2. **Add to `.gitignore`** (create if it doesn't exist):
```
.env
.env.local
.env.*.local
```

3. **Run these commands to remove accidentally committed `.env`**:
```bash
git rm --cached .env
git commit -m "Remove .env file (never commit secrets)"
```

4. **Users setup instructions**:
Include in your README for users:
```bash
# Copy the example
cp .env.example .env

# Edit with your API keys
nano .env
```

## 🚀 Deployment

### Local Deployment
Already covered in Quick Start section.

### Cloud Deployment
For deploying LangGraph server:
- See [LangGraph Cloud Documentation](https://langchain-ai.github.io/langgraph/cloud/)
- Use environment variables for secrets

### Containerization
```bash
# Docker support coming soon
```

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- Additional research sources beyond web search
- Enhanced report formatting options
- Multi-language support
- Caching for repeated queries

## 📦 Dependencies

**Backend**:
- `langchain` - LLM orchestration
- `langgraph` - Agent state management
- `deepagents` - Multi-agent framework
- `tavily-python` - Web search API
- `langchain-google-genai` - Gemini LLM integration
- `langchain-anthropic` - Claude LLM integration

**Frontend**:
- `next.js` - React framework
- `react` - UI library
- `tailwindcss` - Styling
- `radix-ui` - Component library

## 📜 License

MIT License

## 🎓 Learn More

- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [LangChain Documentation](https://python.langchain.com/)
- [DeepAgents Framework](https://github.com/langchain-ai/deepagents)
- [Tavily Search API](https://www.tavily.com/)

## 💡 Tips & Tricks

### Performance Optimization
- Increase `max_concurrent_research_units` for faster research (uses more API calls)
- Decrease for lower cost, slower completion
- Adjust `max_researcher_iterations` based on complexity

### Debugging
- Check LangSmith dashboard for detailed agent execution traces
- Review `/final_report.md` for output quality assessment
- Use Jupyter notebook for interactive debugging

---

**Happy researching! 🔍📊✨**

LangGraph server will open a new browser window with the Studio interface, which you can submit your search query to:

<img width="2869" height="1512" alt="Screenshot 2025-11-17 at 11 42 59 AM" src="https://github.com/user-attachments/assets/03090057-c199-42fe-a0f7-769704c2124b" />

You can also connect the LangGraph server to a [UI specifically designed for deepagents](https://github.com/langchain-ai/deep-agents-ui):

```bash
git clone https://github.com/langchain-ai/deep-agents-ui.git
cd deep-agents-ui
yarn install
yarn dev
```

Then follow the instructions in the [deep-agents-ui README](https://github.com/langchain-ai/deep-agents-ui?tab=readme-ov-file#connecting-to-a-langgraph-server) to connect the UI to the running LangGraph server.

This provides a user-friendly chat interface and visualization of files in state.

<img width="2039" height="1495" alt="Screenshot 2025-11-17 at 1 11 27 PM" src="https://github.com/user-attachments/assets/d559876b-4c90-46fb-8e70-c16c93793fa8" />

## 📚 Resources

- **[Deep Research Course](https://academy.langchain.com/courses/deep-research-with-langgraph)** - Full course on deep research with LangGraph

### Custom Model

By default, `deepagents` uses `"claude-sonnet-4-5-20250929"`. You can customize this by passing any [LangChain model object](https://python.langchain.com/docs/integrations/chat/). See the Deep Agents package [README](https://github.com/langchain-ai/deepagents?tab=readme-ov-file#model) for more details.

```python
from langchain_openai import ChatOpenAI
from deepagents import create_deep_agent

# Local LLM (LM Studio / Ollama - OpenAI-compatible)
model = ChatOpenAI(
    model="local-model",   # replace with your loaded model name
    base_url="https://192.168.68.110:1234/v1",
    api_key="lm-studio",
    temperature=0.0,
)

# Using Claude
# from langchain_anthropic import ChatAnthropic
# model = ChatAnthropic(model="claude-sonnet-4-5-20250929", temperature=0.0)

# Using Gemini
# from langchain_google_genai import ChatGoogleGenerativeAI
# model = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.0)

agent = create_deep_agent(
    model=model,
)
```

### Custom Instructions

The deep research agent uses custom instructions defined in `research_agent/prompts.py` that complement (rather than duplicate) the default middleware instructions. You can modify these in any way you want.

| Instruction Set | Purpose |
|----------------|---------|
| `RESEARCH_WORKFLOW_INSTRUCTIONS` | Defines the 5-step research workflow: save request → plan with TODOs → delegate to sub-agents → synthesize → respond. Includes research-specific planning guidelines like batching similar tasks and scaling rules for different query types. |
| `SUBAGENT_DELEGATION_INSTRUCTIONS` | Provides concrete delegation strategies with examples: simple queries use 1 sub-agent, comparisons use 1 per element, multi-faceted research uses 1 per aspect. Sets limits on parallel execution (max 3 concurrent) and iteration rounds (max 3). |
| `RESEARCHER_INSTRUCTIONS` | Guides individual research sub-agents to conduct focused web searches. Includes hard limits (2-3 searches for simple queries, max 5 for complex), emphasizes using `think_tool` after each search for strategic reflection, and defines stopping criteria. |

### Custom Tools

The deep research agent adds the following custom tools beyond the built-in deepagent tools. You can also use your own tools, including via MCP servers. See the Deep Agents package [README](https://github.com/langchain-ai/deepagents?tab=readme-ov-file#mcp) for more details.

| Tool Name | Description |
|-----------|-------------|
| `tavily_search` | Web search tool that uses Tavily purely as a URL discovery engine. Performs searches using Tavily API to find relevant URLs, fetches full webpage content via HTTP with proper User-Agent headers (avoiding 403 errors), converts HTML to markdown, and returns the complete content without summarization to preserve all information for the agent's analysis. Works with both Claude and Gemini models. |
| `think_tool` | Strategic reflection mechanism that helps the agent pause and assess progress between searches, analyze findings, identify gaps, and plan next steps. |
