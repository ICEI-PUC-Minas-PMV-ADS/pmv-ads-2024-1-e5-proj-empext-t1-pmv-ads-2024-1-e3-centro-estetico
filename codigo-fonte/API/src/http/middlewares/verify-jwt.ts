// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FastifyReply, FastifyRequest } from "fastify";

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = request.cookies.auth;
    if (!token) {
      return reply.code(401).send({ message: "Unauthorized" });
    }
    const decoded = await request.jwtVerify(token);
    request.user = { id: decoded.sub };
  } catch (error) {
    return reply.code(401).send({ message: "Unauthorized" });
  }
}
