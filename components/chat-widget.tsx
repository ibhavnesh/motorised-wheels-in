"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Phone,
  Mail,
  Calendar,
  Car,
  Wrench,
  Star
} from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  type?: 'text' | 'quick_reply'
}

const quickReplies = [
  { text: "Book Service", icon: Calendar, action: "book_service" },
  { text: "Get Quote", icon: Star, action: "get_quote" },
  { text: "Contact Info", icon: Phone, action: "contact_info" },
  { text: "Our Services", icon: Wrench, action: "services" }
]

const botResponses: { [key: string]: string } = {
  hello: "Hello! Welcome to Motorised Wheels! 🚗 How can I help you today?",
  hi: "Hi there! I'm here to assist you with all your automotive needs. What can I help you with?",
  service: "We offer a wide range of premium automotive services including:\n\n🔧 Performance Tuning\n🛡️ Ceramic Coating\n⚡ Electrical Systems\n🎨 Custom Modifications\n\nWhich service interests you?",
  book_service: "Great! I'd love to help you book a service. You can:\n\n📅 Schedule online at our website\n📞 Call us at (555) 123-4567\n💬 Continue chatting for assistance\n\nWhat type of service do you need?",
  get_quote: "I'd be happy to help you get a quote! For accurate pricing, please:\n\n📝 Tell me what service you need\n🚗 Provide your vehicle details\n📞 Or call us for immediate assistance\n\nWhat service are you looking for?",
  contact_info: "Here's how you can reach us:\n\n📞 Phone: (555) 123-4567\n📧 Email: info@motorisedwheels.com\n📍 Address: 123 Premium Auto Lane\n💬 Live Chat: Available 24/7\n\nWe're here to help!",
  services: "Our premium services include:\n\n🚀 Performance Tuning & ECU Remapping\n✨ Ceramic Coating & Detailing\n⚡ Electrical Diagnostics & Repairs\n🎨 Custom Body Modifications\n🛡️ Paint Protection & Correction\n\nWhich service would you like to know more about?",
  pricing: "Our pricing varies based on the service and vehicle. For accurate quotes:\n\n💰 Basic services start from $150\n💎 Premium packages from $500\n⭐ Custom work quoted individually\n\nWould you like to discuss your specific needs?",
  hours: "Our service hours:\n\n🕘 Monday-Friday: 8:00 AM - 6:00 PM\n🕘 Saturday: 9:00 AM - 4:00 PM\n🕘 Sunday: By Appointment Only\n\n📞 Emergency services available 24/7",
  location: "We're located at:\n\n📍 123 Premium Auto Lane\n🏙️ Excellence City, EC 12345\n\n🚗 Easy access with premium facilities\n🅿️ Complimentary parking available\n\nNeed directions?",
  default: "I understand you're interested in our services! Let me help you get the information you need. You can ask me about:\n\n• Our services and pricing\n• Booking appointments\n• Contact information\n• Business hours\n• Location details\n\nWhat would you like to know?"
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Motorised Wheels! 🚗 How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim()
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.hello
    }
    if (message.includes('service') || message.includes('services')) {
      return botResponses.service
    }
    if (message.includes('book') || message.includes('appointment') || message.includes('schedule')) {
      return botResponses.book_service
    }
    if (message.includes('quote') || message.includes('price') || message.includes('cost')) {
      return botResponses.get_quote
    }
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return botResponses.contact_info
    }
    if (message.includes('pricing') || message.includes('price') || message.includes('cost')) {
      return botResponses.pricing
    }
    if (message.includes('hours') || message.includes('time') || message.includes('open')) {
      return botResponses.hours
    }
    if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return botResponses.location
    }
    
    return botResponses.default
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (action: string) => {
    const quickReplyText = quickReplies.find(reply => reply.action === action)?.text || ""
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: quickReplyText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[action] || botResponses.default,
        isBot: true,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        {!isOpen && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-2xl shadow-orange-500/25"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-lg border-gray-700/50 shadow-2xl">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Motorised Wheels</h3>
                    <p className="text-xs text-green-400">Online now</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Chat Messages */}
              <CardContent className="p-0">
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`flex gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          message.isBot 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                            : 'bg-gradient-to-r from-blue-500 to-purple-500'
                        }`}>
                          {message.isBot ? (
                            <Bot className="w-3 h-3 text-white" />
                          ) : (
                            <User className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div className={`rounded-2xl px-3 py-2 ${
                          message.isBot 
                            ? 'bg-gray-700/50 text-white' 
                            : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <div className="bg-gray-700/50 rounded-2xl px-3 py-2">
                          <div className="flex gap-1">
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {messages.length <= 2 && (
                  <div className="p-4 border-t border-gray-700/50">
                    <p className="text-xs text-gray-400 mb-2">Quick replies:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <motion.button
                          key={reply.action}
                          onClick={() => handleQuickReply(reply.action)}
                          className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-700/50 hover:bg-orange-500/20 text-gray-300 hover:text-orange-400 rounded-full transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <reply.icon className="w-3 h-3" />
                          {reply.text}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-700/50">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-orange-500/50"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
