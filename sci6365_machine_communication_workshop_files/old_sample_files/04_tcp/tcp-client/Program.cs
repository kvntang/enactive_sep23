using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


using System.Net;
using System.Net.Sockets;

// https://stackoverflow.com/a/10182935/1934487
namespace tcp
{
    class Program
    {
        const int PORT_NO = 21;
        const string SERVER_IP = "127.0.0.1";
        static void Main(string[] args)
        {
            //---data to send to the server---
            string textToSend = DateTime.Now.ToString();

            //---create a TCPClient object at the IP and port no.---
            TcpClient client = new TcpClient(SERVER_IP, PORT_NO);
            NetworkStream nwStream = client.GetStream();
            byte[] bytesToSend = ASCIIEncoding.ASCII.GetBytes(textToSend);

            //---send the text---
            Console.WriteLine("Sending: " + textToSend);
            nwStream.Write(bytesToSend, 0, bytesToSend.Length);

            //---read back the text---
            byte[] bytesToRead = new byte[client.ReceiveBufferSize];
            int bytesRead = nwStream.Read(bytesToRead, 0, client.ReceiveBufferSize);
            Console.WriteLine("Received: " + Encoding.ASCII.GetString(bytesToRead, 0, bytesRead));
            //Console.ReadKey();

            bool stop = false;
            while (!stop)
            {
                Console.Write("Message: ");
                string msg = Console.ReadLine();

                if (msg.Equals("exit()", StringComparison.InvariantCulture))
                {
                    stop = true;
                    continue;
                }

                bytesToSend = ASCIIEncoding.ASCII.GetBytes(msg);

                //---send the text---
                Console.WriteLine("Sending to server: " + msg);
                nwStream.Write(bytesToSend, 0, bytesToSend.Length);

                //---read back the text---
                bytesToRead = new byte[client.ReceiveBufferSize];
                bytesRead = nwStream.Read(bytesToRead, 0, client.ReceiveBufferSize);
                Console.WriteLine("Received from server: " + Encoding.ASCII.GetString(bytesToRead, 0, bytesRead));
            }

            Console.WriteLine("Exiting...");
            client.Close();
            Console.ReadKey();
        }
    }
}
