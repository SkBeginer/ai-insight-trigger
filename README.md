# **Competizen - AI Competitor Intelligence Platform**  

A modern, responsive web application that triggers an AI Agent workflow to gather competitor intelligence and market insights, delivering automated email summaries to Product Managers.  

---

## **👥 Team**

- **Teammates**: Ganesh H K & Sheetalkumar Chougala  

---

## **🛠 Applications Used**

- **Automation**: Make.com  
- **Frontend Development**: Lovable  

---

## **🔗 Links**

- **Demo Video**: [Google Drive Link Here](https://drive.google.com/file/d/1P7RooaKA332Uq21rfY8-lwDHoo_AY-hu/view?usp=sharing)  
- **Live App**: [https://ai-insight-trigger.lovable.app/](https://ai-insight-trigger.lovable.app/)  

---

## **🚀 Project Description**

Competizen acts as a trigger interface for an AI Agent that:  
- Scans the internet for competitor updates and market trends  
- Analyzes competitive intelligence data using AI-powered APIs  
- Generates comprehensive, actionable email summaries  
- Delivers insights directly to Product Managers within **3–4 minutes**  

---

## **🔄 Workflow**

1. **Trigger the AI Agent** – Click the trigger button  
2. **Webhook Processing** – Make.com webhook starts the workflow  
3. **Data Collection & Analysis** – AI scrapes and processes competitor updates  
4. **Automated Email Delivery** – Summarized report lands in the PM’s inbox  

---

## **👨‍💻 Technical Information**

- **Owner**: Ganesh K Gowda & Sheetalkumar  
- **AI Stack**: Make.com + AI APIs + Web Scraping  
- **Frontend Stack**: React + Vite + TailwindCSS + TypeScript  
- **Deployment**: Optimized for **Vercel Hosting**  

---

## **✨ UI Highlights**

- **Gradient Hero Section** – Pink-to-purple animated gradients  
- **Interactive Loader** – Smooth animations during processing  
- **Success Toast Notifications** – Real-time triggers for user feedback  
- **Time-based Greetings** – Dynamic messages based on user’s local time  
- **Responsive Navbar** – Glass morphism style with dropdown menus  
- **Mobile-First Design** – Seamless performance across all devices  

---

## **🎨 Design Features**

- **Modern Glass Morphism** – Clean, transparent elements with backdrop blur  
- **AI-Themed Particle Animations** – Floating, futuristic effects  
- **Smooth Gradient Transitions** – Interactive hover animations  
- **Pulsing Glow Effects** – Engaging button animations  
- **Typography** – Clean, modern *Inter* font  
- **Dark Theme** – Optimized for contemporary UI trends  

---

## **⚙️ Customization**

To update the webhook endpoint:  
```javascript
// In src/components/Hero.tsx, update the handleClick function:
window.open('YOUR_CUSTOM_WEBHOOK_URL', '_blank');
