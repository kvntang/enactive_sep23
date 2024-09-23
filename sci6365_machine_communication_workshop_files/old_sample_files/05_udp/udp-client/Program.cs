using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace udp
{
    class Program
    {
        static string SERVER_URL = "127.0.0.1";
        static int SERVER_PORT = 27000;

        static void Main(string[] args)
        {
            UDPSocket c = new UDPSocket();
            c.Client(SERVER_URL, SERVER_PORT);

            Console.WriteLine("Connected to UDP server on {0}:{1}", SERVER_URL, SERVER_PORT);

            c.Send("TEST!");

            bool stop = false;
            while (!stop)
            {

                string msg = Console.ReadLine();

                if (msg.Equals("exit()", StringComparison.InvariantCulture))
                {
                    stop = true;
                    continue;
                }

                Console.WriteLine("Sending: " + msg);
                c.Send(msg);
            }

            Console.WriteLine("Exiting...");
            Console.ReadKey();
        }
    }
}
