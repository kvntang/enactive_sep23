using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Net;
using System.Net.Sockets;

// https://stackoverflow.com/a/10182935/1934487
// https://codingvision.net/c-simple-tcp-server
namespace tcp
{
    class Program
    {
        const int PORT_NO = 21;
        const string SERVER_IP = "127.0.0.1";

        static void Main(string[] args)
        {
            //---listen at the specified IP and port no.---
            IPAddress localAdd = IPAddress.Parse(SERVER_IP);
            TcpListener listener = new TcpListener(localAdd, PORT_NO);
            Console.WriteLine("Listening...");
            listener.Start();

            // Wait for connection
            while (true)
            {
                //---incoming client connected---
                TcpClient client = listener.AcceptTcpClient();  //if a connection exists, the server will accept it
                Console.WriteLine("Client connected");

                //---get the incoming data through a network stream---
                NetworkStream ns = client.GetStream(); //networkstream is used to send/receive messages

                // While the client is connected, we look for incoming messages
                while (client.Connected)  
                {
                    //---read incoming stream---
                    byte[] msg = new byte[1024];     //the messages arrive as byte array
                    int bytesRead = ns.Read(msg, 0, msg.Length);   //the same networkstream reads the message sent by the client

                    ////---convert the data received into a string---
                    string dataReceived = Encoding.ASCII.GetString(msg, 0, bytesRead);
                    Console.WriteLine("Received from client: " + dataReceived);

                    //---write back the text to the client---
                    Console.WriteLine("Sending to client: " + dataReceived);
                    ns.Write(msg, 0, bytesRead);
                }
            }
        }
    }
}
