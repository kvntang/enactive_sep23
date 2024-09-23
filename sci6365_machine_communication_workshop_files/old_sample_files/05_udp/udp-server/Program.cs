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
            UDPSocket s = new UDPSocket();
            s.Server(SERVER_URL, SERVER_PORT);

            Console.WriteLine("Started UDP server on {0}:{1}", SERVER_URL, SERVER_PORT);


            Console.ReadKey();
        }
    }
}
