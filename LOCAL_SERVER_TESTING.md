# 🧪 Testing with Local Server (192.168.68.110:1234)

## Quick Setup for Local Testing

Your Deep Research Agent is already configured to work with **any** LangGraph server. Follow these steps to test with your local server.

### Step 1: Start Your Local LangGraph Server

```bash
# In your project directory
langgraph dev
```

This should output something like:
```
Server running at http://localhost:8123
```

Or if running on a different port/IP, note the address.

### Step 2: Configure Frontend to Use Your Local Server

1. **Open the frontend** - Start Next.js:
```bash
cd deep-agents-ui
npm run dev
```

2. **Open in browser** - Go to `http://localhost:3000`

3. **Click Settings** (⚙️ icon in top right)

4. **Enter Configuration**:
   - **Deployment URL**: `http://192.168.68.110:1234` (or your server URL)
   - **Assistant ID**: `research-agent` (or your graph name)
   - **LangSmith API Key** (Optional): Your key if you want tracing

5. **Save Configuration**

### Step 3: Test the Connection

1. **Create a new thread** (or use existing)
2. **Send a test message** like "What is AI?"
3. **Watch the agent work** - You should see:
   - Planning (creating todo list)
   - Research (delegating to sub-agents)
   - Synthesis (consolidating findings)
   - Report generation

### Expected Behavior

```
Your message: "What is AI?"
     ↓
Frontend sends to: http://192.168.68.110:1234
     ↓
Local LangGraph server processes
     ↓
Agent:
  1. Creates todo list
  2. Delegates research tasks
  3. Synthesizes findings
  4. Generates report
     ↓
Frontend displays results
```

---

## 🔍 Troubleshooting

### "Connection refused" error

```bash
# Check if server is running
curl http://192.168.68.110:1234

# If not running, start it:
langgraph dev

# Or if on different machine, ensure firewall allows connection
```

### "Cannot reach local server from another machine"

Make sure:
1. Both machines are on same network
2. Firewall allows connection on port 1234
3. Use the correct IP address (not localhost)

```bash
# Find your local IP
ipconfig getifaddr en0  # macOS
# or
hostname -I  # Linux
```

### Settings not persisting

- Settings are stored in browser localStorage
- Check browser DevTools → Application → Local Storage
- Clear if needed and re-enter

### Assistant not found

Make sure the Assistant ID matches your graph name:
```bash
# Check available graphs when langgraph dev runs
# Default is usually: research-agent or research_agent
```

---

## 📊 Testing Checklist

- [ ] LangGraph server running at `http://192.168.68.110:1234`
- [ ] Frontend running at `http://localhost:3000`
- [ ] Deployment URL configured in settings
- [ ] Assistant ID correct
- [ ] Can create new thread
- [ ] Can send message to agent
- [ ] Agent processes and returns results
- [ ] Results display correctly in UI

---

## 🚀 Once Testing Complete

After verifying everything works:

1. **Commit your code**:
```bash
git add .
git commit -m "Add local server testing guide"
```

2. **Note**: For production deployment, users will use:
   - **LangGraph Cloud** deployment URL
   - Or their own hosted LangGraph server

3. **Update README** if needed with this guide

---

## 💡 Environment Variables (Optional)

For faster testing, you can set environment variables instead of UI settings:

```bash
# In deep-agents-ui directory
echo "NEXT_PUBLIC_LANGGRAPH_URL=http://192.168.68.110:1234" > .env.local
echo "NEXT_PUBLIC_ASSISTANT_ID=research-agent" >> .env.local
```

Then restart Next.js and settings will pre-populate.

---

**Happy testing! Let me know if you encounter any issues.** 🧪✨
